#!/bin/sh

# get dir that this script is in
SCRIPTPATH=$(readlink -f "$0");
SCRIPTDIR=$(dirname "$SCRIPTPATH");

# define some hardcoded options, useful for debugging when developing
SKIP_DOWNLOAD=true
SKIP_EXTRACT=false
SKIP_GENERATE=false

# give feedback
echo '⏳ starting to sync typescript bindings with published protos schema'

# download the protos repo zip from google
TMP_REPO_DOWNLOAD_DIR=$SCRIPTDIR/tmp
download_protos_repo() {
  # download the protos repo
  rm -rf $TMP_REPO_DOWNLOAD_DIR # clear out current contents
  curl --create-dirs -O --output-dir $TMP_REPO_DOWNLOAD_DIR -L https://github.com/googleapis/googleapis/archive/master.zip

  # unzip it
  unzip $TMP_REPO_DOWNLOAD_DIR/master.zip -d $TMP_REPO_DOWNLOAD_DIR

  # give feedback
  echo '📥 downloaded protos repo'
}
if [ "$SKIP_DOWNLOAD" != "true" ]; then download_protos_repo; fi

# copy out the protos for google ads api
VERSION_WE_CARE_ABOUT=v11
PATH_TO_EXTRACT_DEFS_TO=$SCRIPTDIR/definitions/
extract_protos_from_repo() {
  PATH_TO_GOOGLE_ADS_PROTOS=$TMP_REPO_DOWNLOAD_DIR/googleapis-master/google/ads/googleads/$VERSION_WE_CARE_ABOUT
  PATH_TO_GOOGLE_CORE_API_PROTOS=$TMP_REPO_DOWNLOAD_DIR/googleapis-master/google/api
  PATH_TO_GOOGLE_CORE_RPC_PROTOS=$TMP_REPO_DOWNLOAD_DIR/googleapis-master/google/rpc
  PATH_TO_GOOGLE_CORE_LONGRUNNING_PROTOS=$TMP_REPO_DOWNLOAD_DIR/googleapis-master/google/longrunning
  PATH_TO_GOOGLE_CORE_LOGGING_PROTOS=$TMP_REPO_DOWNLOAD_DIR/googleapis-master/google/logging
  PATH_TO_EXTRACT_GOOGLE_ADS_DEFS_TO=$PATH_TO_EXTRACT_DEFS_TO/ads/
  PATH_TO_EXTRACT_GOOGLE_CORE_API_DEFS_TO=$PATH_TO_EXTRACT_DEFS_TO/google/api/
  PATH_TO_EXTRACT_GOOGLE_CORE_RPC_DEFS_TO=$PATH_TO_EXTRACT_DEFS_TO/google/rpc/
  PATH_TO_EXTRACT_GOOGLE_CORE_LONGRUNNING_DEFS_TO=$PATH_TO_EXTRACT_DEFS_TO/google/longrunning/
  PATH_TO_EXTRACT_GOOGLE_CORE_LOGGING_DEFS_TO=$PATH_TO_EXTRACT_DEFS_TO/google/logging/
  rm -rf $PATH_TO_EXTRACT_DEFS_TO # clear out the current downloaded protos
  find $PATH_TO_GOOGLE_ADS_PROTOS -type f -name '*.proto' |
      while read P; do \
        OLD_PATH=$P && \
        NEW_PATH=$PATH_TO_EXTRACT_GOOGLE_ADS_DEFS_TO${P#$PATH_TO_GOOGLE_ADS_PROTOS/} && \
        mkdir -p $(dirname "$NEW_PATH") && \
        cp "$OLD_PATH" "$NEW_PATH" ; done
  find $PATH_TO_GOOGLE_CORE_API_PROTOS -type f -name '*.proto' |
      while read P; do \
        OLD_PATH=$P && \
        NEW_PATH=$PATH_TO_EXTRACT_GOOGLE_CORE_API_DEFS_TO${P#$PATH_TO_GOOGLE_CORE_API_PROTOS/} && \
        mkdir -p $(dirname "$NEW_PATH") && \
        cp "$OLD_PATH" "$NEW_PATH" ; done
  find $PATH_TO_GOOGLE_CORE_RPC_PROTOS -type f -name '*.proto' |
      while read P; do \
        OLD_PATH=$P && \
        NEW_PATH=$PATH_TO_EXTRACT_GOOGLE_CORE_RPC_DEFS_TO${P#$PATH_TO_GOOGLE_CORE_RPC_PROTOS/} && \
        mkdir -p $(dirname "$NEW_PATH") && \
        cp "$OLD_PATH" "$NEW_PATH" ; done
  find $PATH_TO_GOOGLE_CORE_LONGRUNNING_PROTOS -type f -name '*.proto' |
      while read P; do \
        OLD_PATH=$P && \
        NEW_PATH=$PATH_TO_EXTRACT_GOOGLE_CORE_LONGRUNNING_DEFS_TO${P#$PATH_TO_GOOGLE_CORE_LONGRUNNING_PROTOS/} && \
        mkdir -p $(dirname "$NEW_PATH") && \
        cp "$OLD_PATH" "$NEW_PATH" ; done
  find $PATH_TO_GOOGLE_CORE_LOGGING_PROTOS -type f -name '*.proto' |
      while read P; do \
        OLD_PATH=$P && \
        NEW_PATH=$PATH_TO_EXTRACT_GOOGLE_CORE_LOGGING_DEFS_TO${P#$PATH_TO_GOOGLE_CORE_LOGGING_PROTOS/} && \
        mkdir -p $(dirname "$NEW_PATH") && \
        cp "$OLD_PATH" "$NEW_PATH" ; done
  echo '🚚 extracted protos'
}
if [ "$SKIP_EXTRACT" != "true" ]; then extract_protos_from_repo; fi

# fix protos after extraction
fix_protos_after_extraction() {
  # change the import paths in the proto files
  find $PATH_TO_EXTRACT_DEFS_TO -type f -name '*.proto' |
      while read P; do sed -i 's/google\/ads\/googleads\/v11/ads/g' $P; done

  echo '🔧 fixed extracted protos'
}
if [ "$SKIP_EXTRACT" != "true" ]; then fix_protos_after_extraction; fi

# build the typescript types from protos
PATH_TO_GENERATE_TYPES_TO=$SCRIPTDIR/bindings/
generate_typescript_from_protos() {
  rm -rf $PATH_TO_GENERATE_TYPES_TO # clear out the current types
  mkdir -p $PATH_TO_GENERATE_TYPES_TO
  # use https://github.com/timostamm/protobuf-ts to emit types
  find $PATH_TO_EXTRACT_DEFS_TO -type f -name '*.proto' |
      while read P; do \
      npx protoc --ts_out $PATH_TO_GENERATE_TYPES_TO --proto_path $PATH_TO_EXTRACT_DEFS_TO $P \
      ; done

  echo '🏗️  generated typescript bindings for protos'
}
if [ "$SKIP_GENERATE" != "true" ]; then generate_typescript_from_protos; fi

# export all of the exports from one index (to make them exposable)
PATH_TO_EXPORT_INDEX=$SCRIPTDIR/index.ts
build_export_index() {
  rm -rf $PATH_TO_EXPORT_INDEX
  touch PATH_TO_EXPORT_INDEX

  # for each file generated, export from that file
  SUFFIX_TO_REMOVE='.ts'
  find $PATH_TO_GENERATE_TYPES_TO/ads -type f -name '*.ts' |
      while read P; do
        FILE_PATH_WITHOUT_PREFIX=${P#"$PATH_TO_GENERATE_TYPES_TO/"}
        FILE_PATH_WITHOUT_SUFFIX=${FILE_PATH_WITHOUT_PREFIX%"$SUFFIX_TO_REMOVE"}
        echo "export * from './bindings/$FILE_PATH_WITHOUT_SUFFIX';" >> $PATH_TO_EXPORT_INDEX
      done

  echo '📦️ exposed typescript bindings in export index'
}
build_export_index

# done
echo '🎉 done'
exit

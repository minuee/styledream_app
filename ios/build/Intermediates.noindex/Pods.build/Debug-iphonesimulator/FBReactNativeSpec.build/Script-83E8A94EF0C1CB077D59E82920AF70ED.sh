#!/bin/sh
set -o pipefail

bash -l -c 'SRCS_DIR=/Users/sv/Documents/WorkPlace/project/sadadream/node_modules/react-native/scripts/../Libraries CODEGEN_MODULES_OUTPUT_DIR=/Users/sv/Documents/WorkPlace/project/sadadream/node_modules/react-native/scripts/../React/FBReactNativeSpec/FBReactNativeSpec CODEGEN_MODULES_LIBRARY_NAME=FBReactNativeSpec /Users/sv/Documents/WorkPlace/project/sadadream/node_modules/react-native/scripts/generate-specs.sh' 2>&1 | tee "${SCRIPT_OUTPUT_FILE_0}"

#!/bin/bash

# Set the path to the build folder
ROOT_FOLDER=$(git rev-parse --show-toplevel)
BUILD_FOLDER="$ROOT_FOLDER/build"

# Get the file sizes in the build folder and format them as a table
FILESIZES=$(du -sh "$BUILD_FOLDER"/* | sort -rh | awk -F'\t' 'BEGIN { printf "%-50s\t%s\n", "File", "Size" } { printf "%-50s\t%s\n", $2, $1 }')

# Print the file sizes table
echo "File sizes in the build folder:"
echo "$FILESIZES"

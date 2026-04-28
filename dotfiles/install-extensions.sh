#!/usr/bin/env bash

file=./vscode.list-extensions

# https://mywiki.wooledge.org/BashFAQ/001
while IFS= read -r line; do
	codium --install-extension "$line"
done <"$file"

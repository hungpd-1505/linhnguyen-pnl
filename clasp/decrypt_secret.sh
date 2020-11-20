#!/bin/sh

# Decrypt the file
# cd clasp
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$DECRYPT_PASSPHRASE" --output ~/.clasprc.json ./clasp/.clasprc.json.gpg
#!/usr/bin/env bash
# Publish changes in data_engineering_revision/ to GitHub Pages.
# Usage:
#   ./publish_data_engineering.sh                 # commits with an auto message
#   ./publish_data_engineering.sh "your message"  # commits with your message
set -euo pipefail

REPO="/home/kappa/Documents/kappa20.github.io"
cd "$REPO"

MSG="${1:-update data_engineering_revision ($(date '+%Y-%m-%d %H:%M'))}"

git add -A data_engineering_revision

if git diff --cached --quiet -- data_engineering_revision; then
    echo "No changes in data_engineering_revision/ — nothing to publish."
    exit 0
fi

echo "Changes to publish:"
git diff --cached --stat -- data_engineering_revision
echo

git commit -m "$MSG"
git push

echo
echo "Published. GitHub Pages usually updates within a minute."

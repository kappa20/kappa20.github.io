#!/usr/bin/env bash
# Publish changes in revision_ml/ to GitHub Pages.
# Usage:
#   ./publish_revision_ml.sh                 # commits with an auto message
#   ./publish_revision_ml.sh "your message"  # commits with your message
set -euo pipefail

REPO="/home/kappa/Documents/kappa20.github.io"
cd "$REPO"

MSG="${1:-update revision_ml ($(date '+%Y-%m-%d %H:%M'))}"

# Stage only the revision_ml folder
git add -A revision_ml

# Nothing to do?
if git diff --cached --quiet -- revision_ml; then
    echo "No changes in revision_ml/ — nothing to publish."
    exit 0
fi

echo "Changes to publish:"
git diff --cached --stat -- revision_ml
echo

git commit -m "$MSG"
git push

echo
echo "Published. GitHub Pages usually updates within a minute."

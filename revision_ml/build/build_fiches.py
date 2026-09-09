#!/usr/bin/env python3
"""Regenerate revision_ml/data/fiches.js from study_guide/*.md — run after editing a fiche."""
import io, os, glob
HERE = os.path.dirname(os.path.abspath(__file__))
SG   = os.path.normpath(os.path.join(HERE, "..", "..", "study_guide"))
OUT  = os.path.join(HERE, "..", "data", "fiches.js")
parts = [
    "/* =============================================================================\n"
    " * data/fiches.js  —  GENERE depuis ../study_guide/*.md\n"
    " * NE PAS editer a la main : modifie le .md puis relance build/build_fiches.py\n"
    " * ============================================================================= */\n"
    "window.ML = window.ML || {};\n"
    "window.ML.ficheText = {};\n"]
for f in sorted(glob.glob(os.path.join(SG, "*.md"))):
    fid = os.path.basename(f)[:2]
    txt = io.open(f, encoding="utf-8").read()
    assert "</script" not in txt.lower(), f
    esc = txt.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    parts.append('window.ML.ficheText["%s"] = `%s`;\n' % (fid, esc))
io.open(OUT, "w", encoding="utf-8", newline="\n").write("".join(parts))
print("regenerated", OUT)

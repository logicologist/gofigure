

import re
import os
import shutil
from pathlib import Path

postdir = 'content/posts'

for fname in os.listdir(postdir):
    if not fname.endswith('.md') or '_index' in fname:
        continue

    fpath = Path('content') / Path(fname)
    print(fpath)

    with fpath.open('r') as f:
        content = f.read()

    re.sub(


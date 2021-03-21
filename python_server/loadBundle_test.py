import urllib.request
from unittest import TestCase

ROOT_URL = "https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/deploy"


class TestMailToTagDict(TestCase):
    def setUp(self) -> None:
        pass

    def test_file_name(self):
        with urllib.request.urlopen(ROOT_URL+'/index.html') as f:
            html: str = f.read().decode('utf-8')
            assert html.find("""<link rel="modulepreload" href="./build/main.js">""") != -1

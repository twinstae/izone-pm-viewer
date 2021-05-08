import pathlib
import os
import subprocess
from xml.etree import ElementTree
import tempfile
import uuid
import codecs

from loguru import logger
from ._base import BaseNotifier


class WindowsNotifier(BaseNotifier):
    def __init__(self):
        """ Main Notification System for Windows. Basically ported from go-toast/toast """

        # Create the base
        self._top_ps1_script = f"""
[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
[Windows.UI.Notifications.ToastNotification, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null
"""

    def _generate_notification_xml(
        self,
        application_id,
        notification_title,
        notification_subtitle,
        notification_icon,
        notification_audio,
        notification_url,
    ):

        toastXml = f"""<toast duration="short">
            <visual>
                <binding template="ToastImageAndText02">
                    <image id="1" hint-crop="circle" src="{notification_icon}" />
                    <text id="1">
                        {notification_title}
                    </text>
                    <text id="2">
                        {notification_subtitle}
                    </text>
                </binding>
            </visual>
            <actions>
                <action activationType="protocol" arguments="{notification_url}" content="메일 읽기" />
                <action activationType="system" arguments="snooze" content="" />
            </actions>
            <audio silent="true" />
        </toast>""".split("\n")

        # Great we have a generated XML notification.
        # We need to create the rest of the .ps1 file and dump it to the temporary directory

        generated_ps1_file = f"""
        {self._top_ps1_script}
        $APP_ID = "{application_id}"
        
        $template = @"
{"".join([line.strip() for line in toastXml])}
"@
        
        $xml = New-Object Windows.Data.Xml.Dom.XmlDocument
        $xml.LoadXml($template)
        $toast = New-Object Windows.UI.Notifications.ToastNotification $xml
        [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($APP_ID).Show($toast)
        """
        return generated_ps1_file

    def send_notification(
        self,
        notification_title,
        notification_subtitle,
        notification_icon,
        application_name,
        notification_audio,
        notification_url,
    ):
        generated_file = self._generate_notification_xml(
            notification_title=notification_title,
            notification_subtitle=notification_subtitle,
            notification_icon=notification_icon,
            application_id=application_name,
            notification_audio=notification_audio,
            notification_url=notification_url,
        )

        if notification_audio:
            subprocess.Popen(
                [
                    "Powershell",
                    f'(New-Object Media.SoundPlayer "{notification_audio}").playsync()',
                ]
            )

        # open the temporary directory
        with tempfile.TemporaryDirectory() as temp_dir:
            generated_uuid_file = str(uuid.uuid4())
            with codecs.open(
                f"{temp_dir}/{generated_uuid_file}.ps1", "w", "utf_8_sig"
            ) as ps1_file:
                ps1_file.write(generated_file)
            # exceute the file
            startupinfo = subprocess.STARTUPINFO()
            startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
            subprocess.Popen(
                [
                    "Powershell",
                    "-ExecutionPolicy",
                    "Bypass",
                    "-File",
                    f"{generated_uuid_file}.ps1",
                ],
                cwd=temp_dir,
                startupinfo=startupinfo,
            ).wait()
        return True

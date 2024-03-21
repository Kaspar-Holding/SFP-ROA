from django.core import mail
from django.test import TestCase, SimpleTestCase
from django.core.mail import send_mail
from django.conf import settings
class MyEmailTestCase(SimpleTestCase):
    def test_send_email(self):
        # Call your email-sending function
        subject = 'Subject of the email'
        message = 'Body of the email'
        from_email = settings.EMAIL_HOST_USER
        recipient_list = ['receipent@example.com']

        send_mail(subject, message, from_email, recipient_list)
        print("Email sent")
        # # Check that one message has been sent
        self.assertEqual(len(mail.outbox), 1)

        # Verify email contents
        self.assertEqual(mail.outbox[0].subject, 'Subject of the email')
        self.assertEqual(mail.outbox[0].body, 'Body of the email')
        self.assertEqual(mail.outbox[0].from_email, settings.EMAIL_HOST_USER)
        self.assertIn('receipent@example.com', mail.outbox[0].to)

    # Add more test cases as needed

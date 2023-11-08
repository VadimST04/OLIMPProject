from kivy.uix.screenmanager import Screen
from kivymd.uix.textfield import MDTextField
from kivymd.uix.card import MDCard
from kivymd.uix.fitimage import FitImage
from kivy.uix.scrollview import ScrollView

class BookPageWindow(Screen):
    def shorten_text(self, text, max_length):
        if len(text) > max_length:
            return text[:max_length] + '...'
        return text









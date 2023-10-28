from kivy.lang import Builder
from kivy.core.window import Window
from kivymd.app import MDApp
from kivy.uix.screenmanager import Screen
from kivymd.uix.screen import MDScreen

from BookPage import Screen

Window.size = (350, 600)


class NewsPageWindow(Screen):
    pass


class Example(MDApp):
    def build(self):

        return Builder.load_file('css.kv')


Example().run()

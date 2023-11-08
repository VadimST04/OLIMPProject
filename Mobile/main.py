from kivy.core.window import Window
from kivymd.theming import ThemeManager
from kivy.utils import get_color_from_hex
from kivymd.app import MDApp
from kivy.lang import Builder
from kivymd.uix.bottomnavigation import MDBottomNavigation
from kivymd.uix.screen import MDScreen
from kivymd.uix.toolbar import MDTopAppBar

from loopWidget import LoopWidget

Window.size = (350, 600)


class MainScreen(MDScreen):
    pass


class TopBar(MDTopAppBar):
    pass


class BottomNavigation(MDBottomNavigation):
    pass


class MainApp(MDApp):
    def build(self):
        Builder.load_file('main_kv.kv')
        return MainScreen()

    def on_start(self):
        LoopWidget().add_widget_news(self)

    def shorten_text(self, text, max_length):
        if len(text) > max_length:
            return text[:max_length] + '...'
        return text


if __name__ == '__main__':
    MainApp().run()

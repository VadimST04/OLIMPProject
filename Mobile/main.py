from kivy.core.window import Window
from kivy.graphics import RoundedRectangle, Ellipse, Color
from kivy.uix.image import Image
from kivy.utils import get_color_from_hex
from kivymd.app import MDApp
from kivy.lang import Builder
from kivymd.uix.bottomnavigation import MDBottomNavigation
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.button import MDIconButton, MDFillRoundFlatButton
from kivymd.uix.label import MDLabel
from kivymd.uix.list import MDList, ThreeLineAvatarIconListItem, TwoLineAvatarIconListItem
from kivymd.uix.scrollview import MDScrollView
from kivy.uix.scrollview import ScrollView
from kivymd.uix.toolbar import MDTopAppBar
from kivymd.uix.widget import MDWidget

Window.size = (350, 600)


class LoopWidget(MDWidget):

    pass


class BoxLayoutMain(MDBoxLayout):
    pass


class TopBar(MDTopAppBar):
    pass


class ScrollViewMain(MDScrollView):
    pass


class BottomNavigation(MDBottomNavigation):
    pass


class MainApp(MDApp):
    def build(self):
        return Builder.load_file('main_kv.kv')

    @staticmethod
    def navigation_draw():
        print('Navigation')

    @staticmethod
    def hex_to_rgb(hex_color):
        rgb_color = get_color_from_hex(hex_color)
        return rgb_color

    def shorten_text(self, text, max_length):
        if len(text) > max_length:
            return text[:max_length] + '...'
        return text


if __name__ == '__main__':
    MainApp().run()

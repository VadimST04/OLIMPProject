from kivy.core.window import Window
from kivy.graphics import Color, RoundedRectangle, Ellipse
from kivy.uix.image import Image
from kivymd.app import MDApp
from kivy.lang import Builder
from kivymd.uix.bottomnavigation import MDBottomNavigation
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.button import MDIconButton
from kivymd.uix.list import MDList, ThreeLineAvatarIconListItem
from kivymd.uix.scrollview import MDScrollView
from kivy.uix.scrollview import ScrollView
from kivymd.uix.toolbar import MDTopAppBar


Window.size = (350, 600)


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


if __name__ == '__main__':
    MainApp().run()

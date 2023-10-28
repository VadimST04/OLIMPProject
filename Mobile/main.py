from kivy.core.window import Window
from kivy.graphics import RoundedRectangle, Ellipse, Color
from kivy.metrics import dp
from kivy.uix.image import Image
from kivymd.theming import ThemeManager
from kivy.utils import get_color_from_hex
from kivymd.app import MDApp
from kivy.lang import Builder
from kivymd.uix.bottomnavigation import MDBottomNavigation
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.button import MDIconButton, MDFillRoundFlatButton, MDRaisedButton
from kivymd.uix.fitimage import FitImage
from kivymd.uix.gridlayout import MDGridLayout
from kivymd.uix.label import MDLabel
from kivymd.uix.list import MDList, ThreeLineAvatarIconListItem, TwoLineAvatarIconListItem
from kivymd.uix.relativelayout import MDRelativeLayout
from kivymd.uix.screen import MDScreen
from kivymd.uix.scrollview import MDScrollView
from kivy.uix.scrollview import ScrollView
from kivymd.uix.toolbar import MDTopAppBar
from kivymd.uix.widget import MDWidget

Window.size = (350, 600)

TEXT = 'I would prefer to be able to do this using existing kivy layouts instead of having to write my own layout class to handle I would prefer to be able to do this using existing kivy layouts instead of having to write my own layout class to handle this, but if no other option is possible, this is also ok.'


class LoopWidget(MDWidget):
    pass
    # def __init__(self, **kwargs):
    #     super(LoopWidget, self).__init__(**kwargs)
    #     photos = ['size200_1.jpg', 'size200_2.jpg', 'size200_3.jpeg',
    #               'flowers.jpg', 'nature.jpg']
    #     self.app = MainApp().get_running_app()
    #     for photo in photos:
    #         self.height = self.width / 3
    #
    #         with self.canvas:
    #             Color(rgb=self.app.hex_to_rgb('#E1E1E1'))
    #             RoundedRectangle(pos=self.pos, size=self.size, radius=[30, 30, 30, 30])
    #
    #         self.box_layout = MDBoxLayout(pos=self.pos, width=self.width, height=self.height)
    #         self.relative_1 = MDRelativeLayout(size_hint=(0.3, 1))
    #         self.fit_image = FitImage(source=photo, size_hint=(0.8, 0.8),
    #                                   pos_hint={'center_x': 0.5, 'center_y': 0.5},
    #                                   radius=[25, 25, 25, 25])
    #         self.relative_1.add_widget(self.fit_image)
    #
    #         self.relative_2 = MDRelativeLayout(size_hint=(0.45, 1), md_bg_color='#999999')
    #         self.grid_layout = MDGridLayout(cols=1)
    #         self.label_1 = MDLabel(text=self.app.shorten_text('French Radio Stations', 20),
    #                                padding=(0, self.grid_layout.width * 0.1, 0, 0),
    #                                size_hint_y=None, font_size=self.grid_layout.width * 0.1)
    #         self.label_1.size = self.label_1.texture_size
    #
    #         self.label_2 = MDLabel(text=self.app.shorten_text(TEXT, 100), color='#737373',
    #                                padding=(0, self.grid_layout.width * 0.05, 0, self.grid_layout.width * 0.2),
    #                                font_size=self.grid_layout.width * 0.08, size_hint_y=None)
    #         self.label_2.size = self.label_2.texture_size
    #         self.grid_layout.add_widget(self.label_1)
    #         self.grid_layout.add_widget(self.label_2)
    #         self.relative_2.add_widget(self.grid_layout)
    #
    #         self.relative_3 = MDRelativeLayout(size_hint=(0.15, 1))
    #         self.raised_button = MDRaisedButton(text='EN', font_size=dp(12), text_color='F3F3F3',
    #                                             md_bg_color='#217074', elevation=0,
    #                                             size=(self.relative_3.width / 1.5, self.relative_3.width / 1.5),
    #                                             pos_hint={'x': 0.15, 'y': 0.6})
    #         self.relative_3.add_widget(self.raised_button)
    #
    #         self.box_layout.add_widget(self.relative_1)
    #         self.box_layout.add_widget(self.relative_2)
    #         self.box_layout.add_widget(self.relative_3)
    #         self.add_widget(self.box_layout)
            # self.add_widget(self.box_layout)

            # self.ids.scroll.ids.box.add_widget(self)


class MainScreen(MDScreen):
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
        Builder.load_file('main_kv.kv')
        return MainScreen()

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

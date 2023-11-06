from kivy.core.window import Window
from kivy.uix.image import Image, AsyncImage
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
        Builder.load_file('loopWidget.kv')
        return MainScreen()

    def on_start(self):
        bottom_nav = BottomNavigation()
        bottom_nav.switch_tab('screen_3')
        loop_widget = LoopWidget()
        loop_widget.add_widget_news(self)

    # def add_widget_news(self):
    #     box_layout = self.root.ids.scroll.ids.box
    #     photos = ['size200_1.jpg', 'size200_2.jpg', 'size200_3.jpeg',
    #               'flowers.jpg', 'nature.jpg']
    #     text_list = ['Crisis of Refugees: Escalation at the European Border',
    #                  'COVID-19 Study: New Insights into Virus Spread',
    #                  'Economic Growth: IMF Forecasts for the Coming Years',
    #                  'Political Shifts: Election of Parliament Leader in Country X',
    #                  'Technological Breakthrough: Launch of First Space Mission to Mars']
    #     for i, photo in enumerate(photos):
    #         loop_widget = LoopWidget()
    #         loop_widget.add_image(photo)
    #         loop_widget.add_head_text(self.shorten_text(text_list[i], 18))
    #         loop_widget.add_description_text(self.shorten_text(TEXT, 100))
    #         box_layout.add_widget(loop_widget)

    # @staticmethod
    # def navigation_draw():
    #     print('Navigation')

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

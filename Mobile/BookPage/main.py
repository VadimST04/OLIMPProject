from kivymd.app import MDApp
from WelcomeScreen import FirstPage
from SecondPage import SecondPg
from Signp import Pagesign
from BookPage import BookPageWindow
from NewsPage import NewsPageWindow
from kivy.uix.screenmanager import ScreenManager
from kivy.lang import Builder
from kivymd.uix.toolbar import MDTopAppBar
from kivymd.uix.bottomnavigation import MDBottomNavigation
from kivymd.uix.navigationdrawer import MDNavigationDrawer
from HScreenForBooks import HeroView
from kivy.core.window import Window
Builder.load_file('CssFiles/Welcomecss.kv')
Builder.load_file('CssFiles/LogInPage.kv')
Builder.load_file('CssFiles/SignupPage.kv')
Builder.load_file('Components/css.kv')
Builder.load_file('CssFiles/bookcss.kv')
Builder.load_file('CssFiles/newscss.kv')
Builder.load_file('CssFiles/BookHeroScreen.kv')

Window.size = (350, 600)


class BotmBar(MDBottomNavigation):
    pass


class TopBar(MDTopAppBar):
    pass


class NavDraver(MDNavigationDrawer):
    pass


class Example(MDApp):

    def build(self):
        screen_manager = ScreenManager()

        welcome_screen = FirstPage()
        screen_manager.add_widget(welcome_screen)

        signup_page = Pagesign()
        screen_manager.add_widget(signup_page)

        login_page = SecondPg()
        screen_manager.add_widget(login_page)

        book_page = BookPageWindow()
        screen_manager.add_widget(book_page)

        hero_book = HeroView()
        screen_manager.add_widget(hero_book)

        news_page = NewsPageWindow()
        screen_manager.add_widget(news_page)

        return screen_manager


Example().run()

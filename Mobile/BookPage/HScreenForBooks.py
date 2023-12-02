from kivy.uix.screenmanager import Screen
from kivy.uix.screenmanager import SlideTransition
from kivy.properties import ObjectProperty


class HeroView(Screen):

    fit_image = ObjectProperty()
    title_textb = ObjectProperty()
    author_textb = ObjectProperty()
    language_textb = ObjectProperty()
    lorem_book = ObjectProperty()

    selected_card_data = {}

    def change_screen(self, screen_name):
        screen_manager = self.manager
        screen_manager.transition = SlideTransition(direction='right')
        screen_manager.current = screen_name
        screen_manager.transition = SlideTransition()

    def apply_data(self):

        hero_card_data = self.selected_card_data or next(iter(self.manager.get_screen('book1').hero_card_data), {})
        source = hero_card_data.get('source', '')
        text = hero_card_data.get('text', '')
        author_desc = hero_card_data.get('author_desc', '')
        language_desc = hero_card_data.get('language_desc', '')
        book_text_b = hero_card_data.get('book_text_b', '')
        fit_image = self.fit_image
        fit_image.source = source

        title_textb = self.title_textb
        title_textb.text = text

        author_textb = self.author_textb
        author_textb.text = author_desc

        language_textb = self.language_textb
        language_textb.text = language_desc

        lorem_book = self.lorem_book
        lorem_book.text = book_text_b

    def shorten_text(self, text, max_length):
        if len(text) > max_length:
            return text[:max_length] + '...'
        return text

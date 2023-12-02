from kivy.uix.screenmanager import Screen
from kivymd.uix.card import MDCard
from kivy.properties import StringProperty, ObjectProperty


class BookPageWindow(Screen):
    image_list = [
        'nature.jpg',
        'flowers.jpg',
        'size200.jpg',
        'jong.png',
    ]
    book_name_list = [
        'Night Circus',
        'Circle',
        'Things We Never Got Over',
        'fff',
    ]
    language_desc_list = [
        'English',
        'English',
        'English',
        'English',
    ]
    author_title_list = [
        'Author 1',
        'Author 2',
        'Author 3',
        'Author 4',
    ]
    book_text_large = [
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of'
        ' classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,'
        ' a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,'
        ' consectetur, from a Lorem Ipsum passage',

        'There are many variations of passages of Lorem Ipsum available, but the majority have'
        ' suffered alteration in some form, by injected humour, or randomised words which'
        'the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,',

        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        " when an unknown printer took a galley "
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries,",

        "It is a long established fact that a reader will be distracted by the readable content of a"
        " page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less "
        "normal distribution of letters"
        ", as opposed to using 'Content here, content here', making it look like readable English"    
        'making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words',
    ]
    hero_card_data = []

    def on_enter(self, *args):
        if not self.ids.chamber.children:
            for i, (source, text, language_desc, author_desc, book_text_b) in enumerate(zip(self.image_list,
                                                                                            self.book_name_list,
                                                                                            self.language_desc_list,
                                                                                            self.author_title_list,
                                                                                            self.book_text_large)):
                hero_card_data = {
                    'source': source,
                    'text': text,
                    'language_desc': language_desc,
                    'author_desc': author_desc,
                    'book_text_b': book_text_b
                }
                self.hero_card_data.append(hero_card_data)

                hero_card = HeroCard(source=source, text=text, language_desc=language_desc, author_desc=author_desc,
                                     book_text_b=book_text_b,
                                     manager=self.manager)
                self.ids.chamber.add_widget(hero_card)


class HeroCard(MDCard):
    source = StringProperty()
    text = StringProperty()
    language_desc = StringProperty()
    author_desc = StringProperty()
    book_text_b = StringProperty()
    manager = ObjectProperty()

    def shorten_text(self, text, max_length):
        if len(text) > max_length:
            return text[:max_length] + '...'
        return text

    def on_touch_down(self, touch):
        if self.collide_point(*touch.pos):
            self.manager.get_screen('screenb').selected_card_data = {
                'source': self.source,
                'text': self.text,
                'language_desc': self.language_desc,
                'author_desc': self.author_desc,
                'book_text_b': self.book_text_b
            }
            self.manager.current = 'screenb'
            return True

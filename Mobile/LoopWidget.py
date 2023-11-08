from kivymd.uix.fitimage import FitImage
from kivymd.uix.scrollview import MDScrollView
from kivymd.uix.widget import MDWidget
from backend_data import get_news


class ScrollViewMain(MDScrollView):

    @staticmethod
    def get_head_text(self):
        return get_news()[0]["title"]

    @staticmethod
    def get_description_text(self):
        return get_news()[0]["description"]

    @staticmethod
    def get_image(self):
        return get_news()[0]["image_url"]


class LoopWidget(MDWidget):
    def __init__(self, **kwargs):
        super(LoopWidget, self).__init__(**kwargs)

    def add_head_text(self, text):
        self.ids.label_head.text = text

    def add_description_text(self, text):
        self.ids.label_description.text = text

    def add_image(self, image_source):
        image = FitImage(source=image_source, size_hint=(0.8, 0.8), radius=[self.width / 10],
                         pos_hint={'center_x': 0.5, 'center_y': 0.5})
        self.ids.relate.add_widget(image)

    @staticmethod
    def add_widget_news(main_app):
        box_layout = main_app.root.ids.scroll.ids.box
        photos = get_news()
        for index, photo in enumerate(photos, start=1):
            loop_widget = LoopWidget()
            loop_widget.add_image(photo['image_url'])
            loop_widget.add_head_text(main_app.shorten_text(photo['title'], 18))
            loop_widget.add_description_text(main_app.shorten_text(photo['description'], 85))
            box_layout.add_widget(loop_widget)

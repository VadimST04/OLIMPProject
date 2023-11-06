from kivymd.uix.fitimage import FitImage
from kivymd.uix.scrollview import MDScrollView
from kivymd.uix.widget import MDWidget

TEXT = 'I would prefer to be able to do this using existing kivy layouts instead of having to write my own layout class to handle I would prefer to be able to do this using existing kivy layouts instead of having to write my own layout class to handle this, but if no other option is possible, this is also ok.'


class ScrollViewMain(MDScrollView):
    pass


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
        photos = ['size200_1.jpg', 'size200_2.jpg', 'size200_3.jpeg',
                  'flowers.jpg', 'nature.jpg']
        text_list = ['Crisis of Refugees: Escalation at the European Border',
                     'COVID-19 Study: New Insights into Virus Spread',
                     'Economic Growth: IMF Forecasts for the Coming Years',
                     'Political Shifts: Election of Parliament Leader in Country X',
                     'Technological Breakthrough: Launch of First Space Mission to Mars']
        for i, photo in enumerate(photos):
            loop_widget = LoopWidget()
            loop_widget.add_image(photo)
            loop_widget.add_head_text(main_app.shorten_text(text_list[i], 18))
            loop_widget.add_description_text(main_app.shorten_text(TEXT, 100))
            box_layout.add_widget(loop_widget)

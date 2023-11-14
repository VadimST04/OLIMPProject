from django.contrib import admin

from baseApp.models import Language
from postsApp.models import Post, Comment, ImagePost


class CommentInLine(admin.TabularInline):
    model = Comment


class ImagePostInLine(admin.TabularInline):
    model = ImagePost


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [CommentInLine, ImagePostInLine]


admin.site.register(Comment)
admin.site.register(ImagePost)
admin.site.register(Language)

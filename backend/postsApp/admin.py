from django.contrib import admin

from baseApp.models import Language
from postsApp.models import Post, Comment


class CommentInLine(admin.TabularInline):
    model = Comment


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [CommentInLine]


admin.site.register(Comment)
admin.site.register(Language)

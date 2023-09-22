from django.contrib import admin

from postsApp.models import Post, Comment


class CommentInLine(admin.TabularInline):
    model = Comment


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [CommentInLine]


admin.site.register(Comment)

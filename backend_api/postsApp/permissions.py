from rest_framework import permissions


class IsAuthorOrIsAuthenticated(permissions.BasePermission):
    """
    Custom permission class for object-level permissions.
    This permission class allows access to objects based on whether the user is the author of the object
    or is authenticated, with special consideration for safe methods.
    """

    def has_object_permission(self, request, view, obj):
        """
        Overrides the base permission method to implement custom object-level permissions.
        :param request: The HTTP request object.
        :param view: The view object being accessed.
        :param obj: The object being checked for permission.
        :return: Returns `True` if the user has permission to access the object, `False` otherwise.
        """
        if request.method in permissions.SAFE_METHODS:
            return bool(request.user and request.user.is_authenticated)
        return obj.author == request.user

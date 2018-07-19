from django.db.models import Q #for querying
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import generics, viewsets, views, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


class UserList(viewsets.ModelViewSet):
	lookup_field = 'id'
	serializer_class = UserSerializer
	queryset = User.objects.all()


	def retrieve(self, request, pk=None):
		if pk == 'i':
			return response.Response(UserSerializer(request.user,
				context={'request':request}).data)
		return super(UserViewSet, self).retrieve(request, pk)


class RegisterView(views.APIView):
    """
    Register a new user.
    """
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
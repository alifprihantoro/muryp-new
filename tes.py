import os

path = r "./public"

for path, sub_directories, files in os.walk(path):
   directory_name = os.path.split(path)[1]

for file in files:
   extension = os.path.splitext(file)[1]
source = os.path.join(path, file)
destination = os.path.join(path, directory_name + extension)
os.rename(source, destination)

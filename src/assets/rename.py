import os

for i in range(1, 11):
    dir = "./faces/" + str(i) + "/"
    index = 1
    for file in os.listdir(dir):
        os.rename(dir + file, dir + str(index) + ".jpg")
        index += 1
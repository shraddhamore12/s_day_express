#!/bin/bash
sudo npm install express mysql
# download the node modules
# npm install

# remove the container if exists or running 
if [ $(sudo docker container ls -q -a --filter name=myexp_c) != '' ]; then
    sudo docker container stop myexp_c
    sudo docker container rm myexp_c
fi

# remove the image if exists
if [ $(sudo docker image ls -q --filter reference=myexpress) != '' ]; then
    sudo docker image rm myexpress
fi

# build the image
sudo docker build -t myexpress .

# start the container
sudo docker run -itd -p 8000:6600 --name myexp_c myexpress

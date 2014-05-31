
Misc
----

1. ```sudo apt-get install avahi-daemon``` (Install mDNS to allow hostname to work).

Change host name
----------------

1. Edit ```/etc/hosts```. Change ```raspberrypi``` to ```basementpi```.
1. Edit ```/etc/hostname```. Change ```raspberrypi``` to ```basementpi```.
1. Run ```sudo /etc/init.d/hostname.sh```

Install LIRC
------------

See http://alexba.in/blog/2013/01/06/setting-up-lirc-on-the-raspberrypi/

1. ```sudo apt-get install lirc```
1. Edit ```/etc/modules```. Add the following:
    
    lirc_dev
    lirc_rpi gpio_in_pin=23 gpio_out_pin=22

1. Edit ```/etc/lirc/hardware.conf```

    # Arguments which will be used when launching lircd
    LIRCD_ARGS=""

    # Don't start lircmd even if there seems to be a good config file
    # START_LIRCMD=false

    # Don't start irexec, even if a good config file seems to exist.
    # START_IREXEC=false

    # Try to load appropriate kernel modules
    LOAD_MODULES=true

    # Run "lircd --driver=help" for a list of supported drivers.
    DRIVER="default"
    # usually /dev/lirc0 is the correct setting for systems using udev
    DEVICE="/dev/lirc0"
    MODULES="lirc_rpi"

    # Default configuration files for your hardware if any
    LIRCD_CONF=""
    LIRCMD_CONF=""

1. Run ```sudo mkdir /etc/lirc/remotes```
1. Copy remote files into ```/etc/lirc/remotes```
1. ```cat``` remote files into ```/etc/lircd.conf```.
1. Run ```sudo /etc/init.d/lirc restart```

Install Node
------------

1. ```wget http://nodejs.org/dist/v0.10.2/node-v0.10.2-linux-arm-pi.tar.gz```
1. ```tar xzf node*```
1. ```sudo mv node* /opt/```
1. ```sudo ln -s /opt/node* /opt/node```
1. ```sudo ln -s /opt/node/bin/node /usr/bin/node```

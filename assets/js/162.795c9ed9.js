(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{446:function(s,n,t){"use strict";t.r(n);var a=t(14),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"virtual-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtual-server"}},[s._v("#")]),s._v(" Virtual server")]),s._v(" "),n("h2",{attrs:{id:"learning-objectives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#learning-objectives"}},[s._v("#")]),s._v(" Learning Objectives")]),s._v(" "),n("ul",[n("li",[s._v("Setup and host multiple websites on a single Virtual Server.")]),s._v(" "),n("li",[s._v("We will use digital ocean, but this can be donw with any clould hosting provider")]),s._v(" "),n("li",[s._v("deploy ubuntu on digital ocean droplet")]),s._v(" "),n("li",[s._v("install lamp stack on server (Apache, mysql, php)")]),s._v(" "),n("li",[s._v("install phpmyadmin")])]),s._v(" "),n("ul",[n("li",[s._v("Configure virtaul hosts on our server for each domain")]),s._v(" "),n("li",[s._v("Manage name servers on our domain registrars admin panel")]),s._v(" "),n("li",[s._v("configure a DNS zone file on the digital ocean admin panel")]),s._v(" "),n("li",[s._v("configure SSL certificates for each domain we are hosting on our server using Let's Encrypt.")])]),s._v(" "),n("p",[s._v("Digital create droplet after that downside\nis one button assign a floating ip")]),s._v(" "),n("p",[n("code",[s._v("ssh root@ip")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apache2\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Connecting to MySQL using a blank password.")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VALIDATE PASSWORD COMPONENT can be used to test passwords")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# and improve security. It checks the strength of password")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# and allows the users to set only those passwords which are")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# secure enough. Would you like to setup VALIDATE PASSWORD component?")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Press y|Y for Yes, any other key for No: no")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Please set the password for root here.")]),s._v("\n\nNew password: root\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove anonymous users? (Press y|Y for Yes, any other key for No) : y")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###############################################")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    SELECT user, authentication_string,plugin,host FROM mysql.user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root i don't have pass")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root  |   nopassword   | auth_socket  | localhost")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# use this command set pass")]),s._v("\nALTER "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED with mysql_native_password BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mypass'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run this command")]),s._v("\nFLUSH PRIVILEGES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check again password")]),s._v("\nSELECT user, authentication_string,plugin,host FROM mysql.user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root  |   6C8989366EAF75BB670A   | auth_socket  | localhost")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##          install php  ####")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php libapache2-mod-php php-mysql\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart apache2\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<?php echo phpinfo(); ?>"')]),s._v(" /var/www/html/info.php\n\nhttp://10.161.7.226/info.php\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############## install phpmyadmin #############")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" phpmyadmin php-mbstring gettext\n\nFirst "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" apache2 server\nSecond Select "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" password "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" password root\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" phpenmod mbstring\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart apache2\n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2enconf phpmyadmin.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart apache2\n\n\n\n")])])]),n("h2",{attrs:{id:"apache-virtual-host"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache-virtual-host"}},[s._v("#")]),s._v(" Apache virtual host")]),s._v(" "),n("ul",[n("li",[s._v("by default, apache identifies the /www/html directory as the root folder of any web content we serve")]),s._v(" "),n("li",[s._v("This needs to be changed when hosting multiple domains on one server.")]),s._v(" "),n("li",[s._v("Examples\n"),n("ul",[n("li",[s._v("abc.com")]),s._v(" "),n("li",[s._v("xyz.com")])])])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/www/abc.com\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/www/xyz.com\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /var/www/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /var/www/abc.com/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /var/www/xyz.com/\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /var/www/xyz.com/index.html\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /var/www/abc.com/index.html\n\nll "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" /var/www/\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default for single url")]),s._v("\n/etc/apache2/sites-available/000-default.conf\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# our domain setting")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/apache2/sites-available/abc.com.conf\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/apache2/sites-available/xyz.com.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <Virtualhost *:80>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         ServerAdmin admin@example.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         ServerName example.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         ServerAlias www.example.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         DocumentRoot /var/www/example.com/html")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         ErrorLog ${APACHE_LOG_DIR}/error.log")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         CustomLog ${APACHE_LOG_DIR}/access.log combined")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# </VirtualHost>")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2ensite abc.com.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2ensite xyz.com.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart apache2\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" a2dissite 000-default.conf\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo i change to root user")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--fqdn")]),s._v("\ndnsdomainname\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hostname\nhostnamectl\n\nhostnamectl set-hostname abc.com\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hostname\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# main computer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" abc.com\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" abc.com\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" xyz.com\n\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);
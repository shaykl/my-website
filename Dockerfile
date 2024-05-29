FROM node:22-bullseye

# Update packages and install dependencies
RUN apt-get update && apt-get install -y \
    gpsd \
    less \
    openssh-server \
    sudo \
    vim \
    watchman \
    && rm -rf /var/lib/apt/lists/*

RUN ( \
    echo 'X11Forwarding yes'; \
    echo 'X11UseLocalhost no'; \
    echo 'PermitRootLogin yes'; \
    echo 'PasswordAuthentication yes'; \
    echo 'AcceptEnv LANG LC_*'; \
  ) > /etc/ssh/sshd_config

RUN ( \
    echo '#!/bin/bash'; \
    echo 'gpsd /dev/ttyS0'; \
    echo 'sudo service ssh start'; \
    echo 'echo Hello'; \
    echo 'tail -f /dev/null'; \
  ) > /usr/local/bin/entrypoint.sh \
  && chmod +x /usr/local/bin/entrypoint.sh

RUN npm install -g npm@10.8.0

ARG USERNAME=shayk
RUN useradd -ms /bin/bash $USERNAME && yes $USERNAME | passwd $USERNAME \
  && usermod -aG sudo $USERNAME \
  && echo "$USERNAME ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/$USERNAME

WORKDIR /home/${USERNAME}

# Set the user as the current user
USER $USERNAME

EXPOSE 22

ENTRYPOINT ["entrypoint.sh"]

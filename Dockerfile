FROM clojure:tools-deps-1.12.0.1479

RUN apt-get update && apt-get install -y \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install Boot
RUN wget -O /usr/bin/boot https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh \
    && chmod +x /usr/bin/boot

# Expect the project directory to be mounted at /app, which will be
# used as the working directory.
VOLUME ["/app"]
WORKDIR "/app"

# Setup user to match host user, and give superuser permissions
ARG USER_ID=1000
RUN useradd code_executor -u ${USER_ID} -g sudo -m
RUN echo 'code_executor ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER ${USER_ID}

# Boot Configuration
ENV BOOT_HOME /home/code_executor/.boot
ENV BOOT_LOCAL_REPO /home/code_executor/.m2

EXPOSE 1812
EXPOSE 1813
EXPOSE 1814
EXPOSE 1815

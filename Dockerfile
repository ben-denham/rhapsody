FROM clojure:tools-deps-1.12.0.1479

# Expect the project directory to be mounted at /app, which will be
# used as the working directory.
VOLUME ["/app"]
WORKDIR "/app"

# Setup user to match host user, and give superuser permissions
ARG USER_ID=1000
RUN useradd code_executor -u ${USER_ID} -g sudo -m
RUN echo 'code_executor ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER ${USER_ID}

EXPOSE 1812
EXPOSE 1813
EXPOSE 1814
EXPOSE 1815

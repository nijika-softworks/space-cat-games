#!/bin/bash

# Find out where the SSH agent socket it
SSH_AUTH_SOCK=$(find /tmp/ -iwholename "/tmp/ssh-*/agent.*")

export SSH_AUTH_SOCK

# Make ssh dir
mkdir -p ~/.ssh

# Add ssh key from environment variable
# ssh-add -l returns non zero exit code if no keys are present
if ! ssh-add -l &> /dev/null; then
 echo "Adding SSH key to agent"
 ssh-add - &> /dev/null <<< "$GITLAB_KEY"
fi

# Add gitlab fingerprint
if [ ! -f ~/.ssh/known_hosts ]; then
 echo "Adding Gitlab fingerprint to known hosts"
 echo "gitlab.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAfuCHKVTjquxvt6CM6tdG4SLp1Btn/nOeHHE5UOzRdf" > ~/.ssh/known_hosts
fi

# Forward to ssh
ssh "$@"
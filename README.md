# netsage-slope-graph
A grafana plugin that takes in pairs of organizations and displays the top 10 pairs in a slope graph.
Query should get the sum of value.num_bits / 8 for top source & dest organizations


# Other Useful Makefile targets
- `build` - runs gulp to build grafana plugin
- `reload` - restarts grafana server to load plugin (needs root/sudo privileges to complete)
- `install` - builds, installs plugin and reloads grafana server

# !! IMPORTANT NOTE !!
Makefile `install` target only tested on Fedora release 25
edit makefile for your system



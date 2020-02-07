# netsage-slope-graph
A grafana plugin that takes Source/Dest pairs and displays the top N pairs in a slope graph.
Query should get the sum of value.num_bits / 8 for top source & destinations.
Number of Pairs and headers can be adjusted in the visualization panel.  Defaults to 10 pairs and source/dest organizations.

# Rename Boilerplate Plugin
1. update `FULL_NAME` and `SHORT_NAME` in `Makefile`
2. run `make name_change`
3. update `PREV_FULL_NAME` and `PREV_SHORT_NAME` in `Makefile` to match current plugin name

# Other Useful Makefile targets
- `build` - runs gulp to build grafana plugin
- `reload` - restarts grafana server to load plugin (needs root/sudo privileges to complete)
- `install` - builds, installs plugin and reloads grafana server

# !! IMPORTANT NOTE !!
Makefile `install` target only tested on Fedora release 25
edit makefile for your system



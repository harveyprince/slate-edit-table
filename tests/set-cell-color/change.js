export default function(plugin, change) {
    plugin.changes.setCellColor(change, '', 1, 0);
    return plugin.changes.setCellColor(change, '#000000', 0, 0);
}

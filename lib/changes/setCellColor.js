// @flow
import { type Change } from 'slate';

import { TablePosition } from '../utils';
import type Options from '../options';

function setCellColor(
    opts: Options,
    change: Change,
    cellColor: string = '',
    x: number,
    y: number
): Change {
    const { value } = change;
    const { startBlock } = value;

    const pos = TablePosition.create(value, startBlock);
    const { table } = pos;

    if (typeof x === 'undefined') {
        x = pos.getColumnIndex();
    }
    if (typeof y === 'undefined') {
        y = pos.getRowIndex();
    }

    const row = table.nodes.get(y);
    const cell = row.nodes.get(x);

    if (cellColor === '') {
        change.setNodeByKey(cell.key, {
            data: cell.data.delete('color')
        });
    } else {
        change.setNodeByKey(cell.key, {
            data: cell.data.set('color', cellColor)
        });
    }

    return change;
}

export default setCellColor;

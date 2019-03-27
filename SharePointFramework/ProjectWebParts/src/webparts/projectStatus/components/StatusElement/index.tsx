import * as React from 'react';
import styles from './StatusElement.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { IStatusElementProps } from './IStatusElementProps';

const StatusElement = ({ iconName, label, value, comment, height, iconSize = 30 }: IStatusElementProps) => {
    return (
        <div className={`${styles.statusElement} ms-Grid`} style={{ height: height }}>
            <div className='ms-Grid-row'>
                <div className='ms-Grid-col ms-sm1' style={{ fontSize: iconSize }}>
                    <Icon iconName={iconName} />
                </div>
                <div className='ms-Grid-col ms-sm11'>
                    <div className={styles.statusElementLabel}>{label}</div>
                    <div className={styles.statusElementValue}>{value}</div>
                    <div className={styles.statusElementComment}>{comment}</div>
                </div>
            </div>
        </div>
    );
};

export default StatusElement;

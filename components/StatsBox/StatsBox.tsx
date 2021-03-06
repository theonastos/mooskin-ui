import * as React from 'react';

import styles from './StatsBox.css';

export interface IStatsBoxProps {
    /** css class */
    className?: string;

    /** stast box side title */
    sideTitle: string;

    /** stast box side color */
    sideColor: string;

    /** stast box side text color */
    sideTextColor: string;

    /** adds href to side title */
    sideTitleHref?: string;

    /** adds on click to side title */
    onClickSideTitle?: (e: React.MouseEvent<HTMLElement>) => void;

    /** main element style */
    style?: React.CSSProperties;
}

export default class StatsBox extends React.Component<IStatsBoxProps, {}>{

    static defaultProps: Partial<IStatsBoxProps> = {
        className: '',
        sideTextColor: '#fff',
        style: {}
    };

    static displayName = 'StatsBox';

    render(){

        const {className, sideColor, sideTextColor, sideTitle, style, sideTitleHref} = this.props;

        const sideTitleComponent = (
            <div className={styles.statsTitle} style={{background: sideColor, color: sideTextColor}} onClick={this.onClickSideTitle}>
                {sideTitle}
            </div>
        );

        const sideTitleAnchor = sideTitleHref ? (
            <a
                href={sideTitleHref}
                className={styles.titleAnchor}
                target={sideTitleHref.includes('http:') || sideTitleHref.includes('https:') ? '_blank' : ''}
            >
                {sideTitleComponent}
            </a>
        ) : sideTitleComponent;

        return (
            <div style={style} className={`${styles.statsBox} ${className}`}>
                {sideTitleAnchor}
                <div className={styles.statsContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    onClickSideTitle = (e: React.MouseEvent<HTMLElement>) => {
        this.props.onClickSideTitle && this.props.onClickSideTitle(e);
    }

}

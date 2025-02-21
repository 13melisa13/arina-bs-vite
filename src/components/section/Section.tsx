import React from 'react';
import styles from './section.module.scss';
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;
import clsx from "clsx";
import {UIButton} from "../ui-button/UIButton";
type SectionProps = {
    title: string;
    children?: React.ReactNode;
    tagTitle: keyof IntrinsicElements;
    afterTitle?: string;
    moreLink?: string;
    flexDirection?: 'row' | 'column';
}

export default function Section({title, children, tagTitle="h2", afterTitle="", moreLink, flexDirection="row"}: SectionProps) {
    return (
        <section className={clsx(styles.section)}>
            {React.createElement(tagTitle,
                {className: clsx(styles.title, styles[tagTitle])},
                title)}
            {afterTitle && <span className={styles.afterTitle}

            >{afterTitle}</span>}
            <div className={clsx(styles.content, styles[flexDirection])}>

                    {children}

            </div>
            {moreLink && <UIButton className={styles.moreLink}
                                   to={moreLink} children={'все >'}
                                   textAlign={'right'}
                                   paddingTop={10}
                                      paddingAside={20}
                                   color={'dark-pink'}
                                   backgroundColor={'soft-pink'}/>}
        </section>
    );
}
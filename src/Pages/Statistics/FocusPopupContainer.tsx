import { ReactChildren, useCallback, useState } from 'react'
import classNames from 'classnames'

import styles from './FocusPopupContainer.module.scss'
import { createPortal } from 'react-dom'

export default function FocusPopupContainer({
    children,
    className,
}: {
    children: any
    className?: string
}) {
    const [enlarged, toggleEnlarged] = useState(false)
    const onFocus = useCallback(() => {
        toggleEnlarged(true)
    }, [])
    return createPortal(
        <div
            className={classNames(styles.wrapper, {
                [styles.enlarged]: enlarged,
            })}
        >
            <div
                className={classNames(className, styles.container)}
                onFocus={onFocus}
            >
                <button
                    className={styles.closeButton}
                    onClick={() => toggleEnlarged(false)}
                >
                    CLOSE
                </button>
                <div className={styles.childrenWrapper}>{children}</div>
            </div>
        </div>,
        document.body
    )
}

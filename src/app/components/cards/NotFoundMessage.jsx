import React from 'react';
import Icon from 'app/components/elements/Icon';

export default class NotFoundMessage extends React.Component {
    render() {
        return (
            <div className="NotFound float-center">
                <div>
                    <Icon name="hive" size="4x" />
                    <h4 className="NotFound__header">
                        Sorry! This page doesn't exist.
                    </h4>
                    <p>
                        Not to worry. You can head back to{' '}
                        <a style={{ fontWeight: 800 }} href="/">
                            our homepage
                        </a>, or check out some great posts.
                    </p>
                    <ul className="NotFound__menu">
                        <li>
                            <a href="/created/hive-137178">new posts</a>
                        </li>
                        <li>
                            <a href="/hot/hive-137178">hot posts</a>
                        </li>
                        <li>
                            <a href="/trending/hive-137178">trending posts</a>
                        </li>
                        <li>
                            <a href="/promoted/hive-137178">promoted posts</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

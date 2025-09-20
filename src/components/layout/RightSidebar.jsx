import React from 'react';
import { notifications, activities, contactsData } from '../../data/demoData.js';
import { UserAvatar } from '../../assets/user-avatars.jsx';

const RightSidebar = () => {
    return (
        // The "xl:block" class has been removed and structure simplified.
        <aside className="w-72 bg-card border-l border-border p-6 flex-shrink-0 overflow-y-auto hidden lg:block">
            <Section title="Notifications">
                {notifications.map(item => <ListItem key={item.id} item={item} />)}
            </Section>
            <Section title="Activities">
                {activities.map(item => <ListItem key={item.id} item={item} />)}
            </Section>

            <Section title="Contacts">
                {contactsData.map(contact => (
                    <li key={contact.id} className="flex items-center">
                        <UserAvatar name={contact.name} />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-foreground leading-snug">{contact.name}</p>
                        </div>
                    </li>
                ))}
            </Section>

        </aside>
    );
};

const Section = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-base font-semibold mb-4 text-foreground">{title}</h3>
        <ul className="space-y-4">{children}</ul>
    </div>
);

const ListItem = ({ item }) => (
    <li className="flex items-start">
        <UserAvatar name={item.user} />
        <div className="ml-3">
            <p className="text-sm text-muted leading-snug">{item.text}</p>
            <span className="text-xs text-muted/70">{item.time}</span>
        </div>
    </li>
);

export default RightSidebar;
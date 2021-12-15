import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import styles from './SideMenu.module.css'
import { coreMenu } from '../../../../data/coreMenu';
function SideMenu() {
  return (
    <nav className={styles.container}>
      {coreMenu.map(i => {
        return <Fragment key={i.key} >
          <div className={styles.item}>{i.title}</div>{
            i.children.map(j => {
              return <div className={styles.child_item} key={j.key}>
                <NavLink className={({ isActive }) => {
                  return isActive ? styles.child_item_active : ''
                }} to={j.path} >{j.title}</NavLink>
              </div>
            })}
        </Fragment>
      })}
    </nav>
  );
}

export default SideMenu;

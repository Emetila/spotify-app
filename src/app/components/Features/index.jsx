import { features } from "./data"
import styles from './style.module.css'

export const Features = () => { 
    return <section className={styles.features}>
        <h1 className={styles.title}>The power of Premium</h1> 
        <div className={styles.list}>
            {features.map((feature)=>(
                <div className={styles.item}>
                  <img src={feature.image} />
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
            ))}
        </div>
            
    </section>
}
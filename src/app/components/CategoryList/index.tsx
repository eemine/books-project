import * as React from 'react';
import { useHistory } from 'react-router';
import { CategoryModel } from 'app/models';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import * as styles from './styles.css';

export interface CategoriesProps {
  items: CategoryModel[];
}

const CategoryList = ({ items }: CategoriesProps) => {
  const history = useHistory();
  return (
    <Grid
      container
      spacing={3}
      style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      {items.map((item) => (
        <Grid key={item.id} item lg={3} md={4} sm={6} xs={12}>
          <Card>
            <CardHeader
              title={item.title}
              subheader={item.lastPublishedAt}
              className={styles.cardHeader}
            />
            <CardMedia>
              <div className={styles.media}>{item.updateType}</div>
            </CardMedia>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push(`/category/${item.listName}`)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;

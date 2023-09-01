const BlogDb = require('../../../data-access/BlogDb');

const BlogSchema = require('../../../validation/schema/Blog');

const createValidation = require('../../../validation')(BlogSchema.createSchema);
const updateValidation = require('../../../validation')(BlogSchema.updateSchema);
const filterValidation = require('../../../validation')(BlogSchema.filterValidationSchema);
const addBlogUsecase = require('../../../use-case/Blog/addBlog')({
  BlogDb,
  createValidation 
});
const findAllBlogUsecase = require('../../../use-case/Blog/findAllBlog')({
  BlogDb,
  filterValidation
});
const getBlogCountUsecase = require('../../../use-case/Blog/getBlogCount')({
  BlogDb,
  filterValidation
});
const getBlogUsecase = require('../../../use-case/Blog/getBlog')({
  BlogDb,
  filterValidation
});
const updateBlogUsecase = require('../../../use-case/Blog/updateBlog')({
  BlogDb,
  updateValidation 
});
const partialUpdateBlogUsecase = require('../../../use-case/Blog/partialUpdateBlog')({ BlogDb });
const softDeleteBlogUsecase = require('../../../use-case/Blog/softDeleteBlog')({ BlogDb });
const softDeleteManyBlogUsecase = require('../../../use-case/Blog/softDeleteManyBlog')({ BlogDb });
const bulkInsertBlogUsecase = require('../../../use-case/Blog/bulkInsertBlog')({ BlogDb });
const bulkUpdateBlogUsecase = require('../../../use-case/Blog/bulkUpdateBlog')({ BlogDb });
const deleteBlogUsecase = require('../../../use-case/Blog/deleteBlog')({ BlogDb });
const deleteManyBlogUsecase = require('../../../use-case/Blog/deleteManyBlog')({ BlogDb });

const BlogController = require('./Blog');

const addBlog = BlogController.addBlog(addBlogUsecase);
const findAllBlog = BlogController.findAllBlog(findAllBlogUsecase);
const getBlogCount = BlogController.getBlogCount(getBlogCountUsecase);
const getBlogById = BlogController.getBlog(getBlogUsecase);
const updateBlog = BlogController.updateBlog(updateBlogUsecase);
const partialUpdateBlog = BlogController.partialUpdateBlog(partialUpdateBlogUsecase);
const softDeleteBlog = BlogController.softDeleteBlog(softDeleteBlogUsecase);
const softDeleteManyBlog = BlogController.softDeleteManyBlog(softDeleteManyBlogUsecase);
const bulkInsertBlog = BlogController.bulkInsertBlog(bulkInsertBlogUsecase);
const bulkUpdateBlog = BlogController.bulkUpdateBlog(bulkUpdateBlogUsecase);
const deleteBlog = BlogController.deleteBlog(deleteBlogUsecase);
const deleteManyBlog = BlogController.deleteManyBlog(deleteManyBlogUsecase);

module.exports = {
  addBlog,
  findAllBlog,
  getBlogCount,
  getBlogById,
  updateBlog,
  partialUpdateBlog,
  softDeleteBlog,
  softDeleteManyBlog,
  bulkInsertBlog,
  bulkUpdateBlog,
  deleteBlog,
  deleteManyBlog,
};
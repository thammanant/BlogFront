# DefaultApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blogsGet**](DefaultApi.md#blogsGet) | **GET** /blogs | Return a list of blogs for the carousel(all)
[**blogsIdDelete**](DefaultApi.md#blogsIdDelete) | **DELETE** /blogs/{id} | Delete a specific blog by its ID
[**blogsIdGet**](DefaultApi.md#blogsIdGet) | **GET** /blogs/{id} | Return a specific blog by its ID
[**blogsIdPut**](DefaultApi.md#blogsIdPut) | **PUT** /blogs/{id} | Update a specific blog by its ID
[**categoriesGet**](DefaultApi.md#categoriesGet) | **GET** /categories | Retrieve all categories
[**categoriesKeyDelete**](DefaultApi.md#categoriesKeyDelete) | **DELETE** /categories/{key} | Delete a specific category by its ID
[**categoriesKeyGet**](DefaultApi.md#categoriesKeyGet) | **GET** /categories/{key} | Retrieve a specific category (Search by key)
[**categoriesKeyPut**](DefaultApi.md#categoriesKeyPut) | **PUT** /categories/{key} | Update a specific category by its ID
[**categoriesPost**](DefaultApi.md#categoriesPost) | **POST** /categories | Create a new category
[**createViewGet**](DefaultApi.md#createViewGet) | **GET** /create-view | Return Create View Data
[**editViewIdGet**](DefaultApi.md#editViewIdGet) | **GET** /edit-view/{id} | Get the edit view data
[**editViewIdPut**](DefaultApi.md#editViewIdPut) | **PUT** /edit-view/{id} | Update the edit view data
[**recentViewGet**](DefaultApi.md#recentViewGet) | **GET** /recent-view | Get the recent view data
[**recentViewIdDelete**](DefaultApi.md#recentViewIdDelete) | **DELETE** /recent-view/{id} | Delete a specific blog by its ID
[**recentViewIdGet**](DefaultApi.md#recentViewIdGet) | **GET** /recent-view/{id} | Search specific data by ID
[**recentViewIdPut**](DefaultApi.md#recentViewIdPut) | **PUT** /recent-view/{id} | Update data of the specific blog


<a name="blogsGet"></a>
# **blogsGet**
> List&lt;Blog&gt; blogsGet()

Return a list of blogs for the carousel(all)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<Blog> result = apiInstance.blogsGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#blogsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Blog&gt;**](Blog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of blogs |  -  |

<a name="blogsIdDelete"></a>
# **blogsIdDelete**
> blogsIdDelete(id)

Delete a specific blog by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    try {
      apiInstance.blogsIdDelete(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#blogsIdDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blog deleted successfully |  -  |
**400** | Invalid request |  -  |

<a name="blogsIdGet"></a>
# **blogsIdGet**
> Blog blogsIdGet(id)

Return a specific blog by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    try {
      Blog result = apiInstance.blogsIdGet(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#blogsIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |

### Return type

[**Blog**](Blog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blog retrieved successfully |  -  |
**404** | Blog not found |  -  |

<a name="blogsIdPut"></a>
# **blogsIdPut**
> blogsIdPut(id, blog)

Update a specific blog by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    Blog blog = new Blog(); // Blog | 
    try {
      apiInstance.blogsIdPut(id, blog);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#blogsIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |
 **blog** | [**Blog**](Blog.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blog updated successfully |  -  |
**400** | Invalid request payload |  -  |

<a name="categoriesGet"></a>
# **categoriesGet**
> List&lt;Category&gt; categoriesGet()

Retrieve all categories

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<Category> result = apiInstance.categoriesGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#categoriesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Category&gt;**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of categories |  -  |

<a name="categoriesKeyDelete"></a>
# **categoriesKeyDelete**
> categoriesKeyDelete(key)

Delete a specific category by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String key = "key_example"; // String | key of the category
    try {
      apiInstance.categoriesKeyDelete(key);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#categoriesKeyDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key of the category |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Category deleted successfully |  -  |
**400** | Invalid request |  -  |

<a name="categoriesKeyGet"></a>
# **categoriesKeyGet**
> Category categoriesKeyGet(key)

Retrieve a specific category (Search by key)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String key = "key_example"; // String | key of the category
    try {
      Category result = apiInstance.categoriesKeyGet(key);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#categoriesKeyGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key of the category |

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Category retrieved successfully |  -  |
**404** | Category not found |  -  |

<a name="categoriesKeyPut"></a>
# **categoriesKeyPut**
> categoriesKeyPut(key, category)

Update a specific category by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String key = "key_example"; // String | key of the category
    Category category = new Category(); // Category | 
    try {
      apiInstance.categoriesKeyPut(key, category);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#categoriesKeyPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key of the category |
 **category** | [**Category**](Category.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Category updated successfully |  -  |
**400** | Invalid request payload |  -  |

<a name="categoriesPost"></a>
# **categoriesPost**
> Category categoriesPost(category)

Create a new category

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Category category = new Category(); // Category | 
    try {
      Category result = apiInstance.categoriesPost(category);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#categoriesPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**Category**](Category.md)|  |

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Category created successfully |  -  |
**400** | Invalid request payload |  -  |

<a name="createViewGet"></a>
# **createViewGet**
> createViewGet()

Return Create View Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.createViewGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#createViewGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data retrieved successfully |  -  |
**400** | Invalid request |  -  |

<a name="editViewIdGet"></a>
# **editViewIdGet**
> EditViewData editViewIdGet(id)

Get the edit view data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    try {
      EditViewData result = apiInstance.editViewIdGet(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#editViewIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |

### Return type

[**EditViewData**](EditViewData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit view data retrieved successfully |  -  |

<a name="editViewIdPut"></a>
# **editViewIdPut**
> editViewIdPut(id, editViewData)

Update the edit view data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    EditViewData editViewData = new EditViewData(); // EditViewData | 
    try {
      apiInstance.editViewIdPut(id, editViewData);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#editViewIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |
 **editViewData** | [**EditViewData**](EditViewData.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit view data updated successfully |  -  |
**400** | Invalid request payload |  -  |

<a name="recentViewGet"></a>
# **recentViewGet**
> RecentViewData recentViewGet()

Get the recent view data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      RecentViewData result = apiInstance.recentViewGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#recentViewGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RecentViewData**](RecentViewData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recent view data retrieved successfully |  -  |

<a name="recentViewIdDelete"></a>
# **recentViewIdDelete**
> recentViewIdDelete(id, recentViewData)

Delete a specific blog by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the recent view data
    RecentViewData recentViewData = new RecentViewData(); // RecentViewData | 
    try {
      apiInstance.recentViewIdDelete(id, recentViewData);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#recentViewIdDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the recent view data |
 **recentViewData** | [**RecentViewData**](RecentViewData.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recent view data deleted successfully |  -  |
**400** | Invalid request payload |  -  |

<a name="recentViewIdGet"></a>
# **recentViewIdGet**
> RecentViewData recentViewIdGet(id)

Search specific data by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    try {
      RecentViewData result = apiInstance.recentViewIdGet(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#recentViewIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |

### Return type

[**RecentViewData**](RecentViewData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recent view data retrieved successfully |  -  |

<a name="recentViewIdPut"></a>
# **recentViewIdPut**
> recentViewIdPut(id, recentViewData)

Update data of the specific blog

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost/api");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | ID of the blog
    RecentViewData recentViewData = new RecentViewData(); // RecentViewData | 
    try {
      apiInstance.recentViewIdPut(id, recentViewData);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#recentViewIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the blog |
 **recentViewData** | [**RecentViewData**](RecentViewData.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recent view data updated successfully |  -  |
**400** | Invalid request payload |  -  |

